import type { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { Task } from "../interfaces/task";

interface props {
  tasks: Task[];
}

const Home: NextPage<{ tasks: Task[] }> = ({ tasks }: props) => {
  const { push } = useRouter();
  return (
    <Layout>
      <div>
        <h1>Home</h1>

        <div>
          {tasks.map((task) => (
            <div key={task._id} onClick={() => push(`/tasks/${task._id}`)}>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/tasks");
  const tasks = await res.json();
  return {
    props: { tasks },
  };
};
