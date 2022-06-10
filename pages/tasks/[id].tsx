import { NextPage, GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import { Task } from "../../interfaces/task";

interface props {
  task: Task;
}

const Task: NextPage<{ task: Task }> = ({ task }: props) => {
  return (
    <Layout>
      <div>
        <h1>single task</h1>
        <br />
        <div>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Task;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch(`http://localhost:3000/api/tasks/${query.id}`);
  const task: Task = await res.json();

  return {
    props: { task },
  };
};
