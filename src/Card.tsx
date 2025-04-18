// TODO: add title and imageSrc in the props for dynamic card
const Card = ({ description }: { description: string }) => {
  return (
    <div className="flex flex-col w-[200px] h-[300px] rounded shadow-md gap-8">
      <img
        height={150}
        width={200}
        src="https://placehold.co/200x150"
        alt="logo"
      />
      <div className="flex flex-col gap-2 p-4">
        <h1 className="font-bold text-lg">Card Title</h1>
        <p className="truncate">{description}</p>
      </div>
    </div>
  );
};

export default Card;
