import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Heart({
  carId,
  userInfo,
}: {
  carId: string | undefined;
  userInfo: any;
}) {
  const [inFavorites, setInFavorites] = useState(
    userInfo?.favorites.includes(carId)
  );

  const handleClick = async () => {
    const res = await fetch(`/api/favorite/${carId}`, {
      method: "PUT",
    });

    if (res.ok) {
      setInFavorites(!inFavorites);
      if (inFavorites) {
        toast.info("Removed from favorites");
      } else {
        toast.success("Added to favorites");
      }
    }
  };

  return (
    <div className="bg-white flex items-center justify-center w-8 h-8 rounded-full absolute top-3 right-3 z-10">
      {inFavorites ? (
        <FaStar
          type="submit"
          className="h-5 w-5 cursor-pointer"
          onClick={handleClick}
        />
      ) : (
        <CiStar
          type="submit"
          className="h-6 w-6 cursor-pointer"
          onClick={handleClick}
        />
      )}
    </div>
  );
}
