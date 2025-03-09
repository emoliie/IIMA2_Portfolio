import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Creative",
  "Innovative",
  "Accessible",
  "Empathetic",
  "Detail-Oriented",
  "Inclusive",
  "Problem-Solver",
  "Responsive",
  "Optimized",
  "Scalable",
  "Maintainable",
  "Efficient",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="bg-gradient-to-r from-red-300 to-purple-400 -rotate-3 -mx-1">
        <div className="flex mask-image-x">
          <div className="flex flex-none gap-4 py-3">
            {words.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
