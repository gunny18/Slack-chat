import { Namespace } from "../../data/models/namespace";
import { Room } from "../../data/models/room";

export const createRoom = async (
  name: String,
  imageURL: string,
  namespaceId: string
) => {
  const room = new Room({
    name,
    imageURL,
  });
  await room.save();

  //   add to namespace rooms array!
  const ns = await Namespace.findByIdAndUpdate(
    namespaceId,
    {
      $push: { rooms: room._id },
    },
    {
      new: true,
    }
  );

  return {
    room,
    namespaceId,
  };
};
