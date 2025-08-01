import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../hooks/imageUrls";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props{
  onSelectGenre: (genre:Genre)=>void;
  selectedGenre: Genre|null;
}


const GenreList = ({selectedGenre ,onSelectGenre}:Props) => {
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
            <Button fontWeight={(selectedGenre?.id === genre.id) ? "bold" : "normal"} variant="link" onClick={()=>onSelectGenre(genre)}  fontSize="lg">{genre.name}</Button>
            </HStack>
            </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
