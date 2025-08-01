import { HStack, Image, List, ListItem, Skeleton, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../hooks/imageUrls";
import GenreListSkeleton from "./GenreListSkeleton";


const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [7, 8, 9, 10, 11, 12];

  if(error) return null;


  return (
    <>

      {isLoading && skeletons.map((skeleton)=>(<GenreListSkeleton key={skeleton}/>))}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="10px">
            <HStack>
            <Image boxSize="30px" src={getCroppedImageURL(genre.image_background)}/>
            <Text fontSize="lg">{genre.name}</Text>
            </HStack>
            </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
