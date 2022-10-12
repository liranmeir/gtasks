import { List } from "@raycast/api";
import { useCachedPromise } from "@raycast/utils";

interface TaskListProps {
  isLoading: boolean;
}
function Today() {
  return (
    <List searchBarPlaceholder={"search in gtasks"} isLoading={true}>
      tasks?.length === 0 ? (
      <List.EmptyView title="Congratulations!" description="No tasks left for today." icon="🎉" />) : ({" "}
      {/* <List.Section title={section.name} subtitle={subtitle} key={index}></List.Section>); */}
    </List>
  );
}

export default function Command() {
  return <Today />;
}
