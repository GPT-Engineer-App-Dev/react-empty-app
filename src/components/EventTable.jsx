import React from 'react';
import { useEvents } from '../integrations/supabase';
import { Table, Tbody, Td, Th, Thead, Tr, Spinner, Box } from '@chakra-ui/react';

const EventTable = ({ onEventClick }) => {
  const { data: events, isLoading, error } = useEvents();

  if (isLoading) return <Spinner />;
  if (error) return <Box>Error loading events</Box>;

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Date</Th>
          <Th>Description</Th>
        </Tr>
      </Thead>
      <Tbody>
        {events.map(event => (
          <Tr key={event.id} onClick={() => onEventClick(event)}>
            <Td>{event.name}</Td>
            <Td>{event.date}</Td>
            <Td>{event.description}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default EventTable;