import { List } from "@raycast/api";
import { useCachedPromise } from "@raycast/utils";
import { google } from "googleapis";

// const tasks = google.tasks("v1");

//TODO: stoppint point move above to API LEVEL
interface TaskListProps {
  isLoading: boolean;
}

function Today() {
  return (
    <List>
      <List.EmptyView title="Congratulations!" description="No tasks left for today." icon="🎉" />
    </List>
  );
}

export default function Command() {
  return <Today />;
}
