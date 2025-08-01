import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../hooks/imageUrls";


const GenreList = () => {
  const { data } = useGenres();

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="10px">
            <HStack>
            <Image boxSize="30px" src={genre.image_background}/>
            <Text fontSize="lg">{genre.name}</Text>
            </HStack>
            </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
