import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Text, Box, Spinner } from '@chakra-ui/react';
import { useComments } from '../integrations/supabase';

const EventModal = ({ isOpen, onClose, event }) => {
  const { data: comments, isLoading, error } = useComments();

  if (isLoading) return <Spinner />;
  if (error) return <Box>Error loading comments</Box>;

  const eventComments = comments.filter(comment => comment.event_id === event.id);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{event.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text><strong>Date:</strong> {event.date}</Text>
          <Text><strong>Description:</strong> {event.description}</Text>
          <Text><strong>Venue:</strong> {event.venue_id.name}</Text>
          <Box mt={4}>
            <Text fontWeight="bold">Comments:</Text>
            {eventComments.length > 0 ? (
              eventComments.map(comment => (
                <Box key={comment.id} p={2} borderBottom="1px solid #ccc">
                  <Text>{comment.content}</Text>
                </Box>
              ))
            ) : (
              <Text>No comments available</Text>
            )}
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EventModal;