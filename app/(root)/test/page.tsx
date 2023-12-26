import getPosts from "@/actions/getPosts";
import Image from "next/image";

const TestPage = async () => {
  const posts = await getPosts();

  return (
    <>
      <div>
        {posts.map((item) => (
          <>
            <div key={item.id} className="border p-6">
              <h1>{item.title}</h1>
              <Image
                src={`${item.imageUrl}`}
                width={500}
                height={500}
                alt="image"
              />
              <p>{item.description}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default TestPage;
