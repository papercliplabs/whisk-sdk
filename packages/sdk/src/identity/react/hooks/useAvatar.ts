"use client";
import { getAvatar } from "../../core";
import { useWhiskSdkContext } from "../../../provider";
import { useQuery } from "@tanstack/react-query";
import { Address } from "viem";
import { useMemo } from "react";
import { IdentityResolvers } from "@paperclip-labs/whisk-core/identity";

export interface UseAvatarParams {
  address: Address; // Address to resolve
  resolvers?: IdentityResolvers; // Override the default resolvers set in the `WhiskSdkProvider` config.
}

export function useAvatar({ address, resolvers }: UseAvatarParams) {
  const {
    apiKey,
    config: { identity },
  } = useWhiskSdkContext();

  if (!identity) {
    throw new Error("Identity config is missing");
  }

  const { resolvers: globalResolvers, overrides } = identity;
  const override = overrides?.[address];

  const resolversInternal = useMemo(() => {
    return resolvers ?? globalResolvers;
  }, [resolvers, globalResolvers]);

  return useQuery({
    queryKey: ["avatar", address, resolversInternal],
    queryFn: async () => await getAvatar(apiKey, { address, resolvers: resolversInternal }),
    placeholderData: override?.avatar,
    enabled: !override, // Don't even fetch if overriding
  });
}
