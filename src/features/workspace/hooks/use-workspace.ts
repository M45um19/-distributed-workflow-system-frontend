import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { workspaceService } from "../services/workspace.service";
import { CreateWorkspaceInput } from "../types/workspace.types";

export function useWorkspaces() {
  return useQuery({
    queryKey: ["workspaces"],
    queryFn: () => workspaceService.getWorkspaces(),
  });
}

export function useOwnedWorkspaces() {
  return useQuery({
    queryKey: ["owned-workspaces"],
    queryFn: () => workspaceService.getOwnedWorkspaces(),
  });
}

export function useWorkspaceById(id: string) {
  return useQuery({
    queryKey: ["workspace", id],
    queryFn: () => workspaceService.getWorkspaceById(id),
    enabled: !!id,
  });
}

export function useCreateWorkspace() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateWorkspaceInput) => workspaceService.createWorkspace(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
      queryClient.invalidateQueries({ queryKey: ["owned-workspaces"] });
    },
  });
}
