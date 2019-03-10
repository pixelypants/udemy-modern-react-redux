export interface ResourceListProps {
  resource: string;
}
export interface ResourceListState {
  resources: ResourceListStateResource[];
}
export interface ResourceListStateResource {
  userId: number;
  id: number;
  title: string;
  body: string;
}
