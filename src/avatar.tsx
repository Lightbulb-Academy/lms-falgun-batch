interface AvatarProps {
  name: string;
  role: string;
  imageSrc?: string;
}

export default function Avatar({
  name,
  role,
  imageSrc = "/vite.svg",
}: AvatarProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: 32,
      }}
      className="bg-gray-300 w-44 rounded shadow-md p-2 items-center"
    >
      <img src={imageSrc} alt="avatar" /> {/* image */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3>{name}</h3> {/* name */}
        {role.toLowerCase() === "admin".toLowerCase() ? (
          <p>{role}</p>
        ) : null}{" "}
        {/* role */}
      </div>
    </div>
  );
}
