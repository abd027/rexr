import { HStack, List, ListItem, Skeleton} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      {Array.from({ length: 6 }).map((_, index) => (
        <ListItem key={index} paddingY="10px">
          <HStack>
            {/* Skeleton box for image */}
            <Skeleton boxSize="30px" borderRadius="8px" />
            {/* Skeleton box for text */}
            <Skeleton height="20px" width="100px" />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
