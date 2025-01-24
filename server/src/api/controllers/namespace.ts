import { Namespace } from "../../data/models/namespace";

export const createNamespace = async (
  name: string,
  imageURL: string,
  endpoint: string
) => {
  const ns = new Namespace({
    name,
    imageURL,
    endpoint,
  });
  await ns.save();
  return ns;
};
