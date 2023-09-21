import { Skeleton, List, ListItem } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <Skeleton height="32px" />
      <ListItem></ListItem>
    </List>
  );
};
export default GenreListSkeleton;
