import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import {
  Form,
  useLoaderData,
  useNavigation,
  useParams,
} from "@remix-run/react";
import { db } from "~/utils/db.server";
import { json } from "react-router";

export async function loader({ params }: LoaderFunctionArgs) {
  const data = await db.comment.findMany({
    where: {
      movieID: params.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return json({ data });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const data = await db.comment.create({
    data: {
      message: formData.get("comment"),
      movieID: formData.get("id"),
    },
  });

  return json({ data });
}

export default function Comments() {
  const { id } = useParams();
  const { data } = useLoaderData();
  const navigation = useNavigation();

  const commentsMarkdown = data.map((post: any) => (
    <div key={post.id}>
      <p>{post.message}</p>
    </div>
  ));

  return (
    <div className="rounded-lg border p-3">
      <h1 className="text-xl font-semibold mb-5"> Your Opinion</h1>

      <div>
        <Form method="POST">
          <textarea
            name="comment"
            className="w-full border border-teal-500 rounded-lg p-2"
          ></textarea>
          <input type="hidden" name="id" value={id} />
          {navigation.state === "submitting" ? (
            <button
              type="button"
              disabled
              className="bg-teal-500 px-4 py-2 rounded-lg text-white"
            >
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="bg-teal-500 px-4 py-2 rounded-lg text-white"
            >
              Add Comment
            </button>
          )}

          <div className="mt-5 flex flex-col gap-y-3"></div>
        </Form>
        {commentsMarkdown}
      </div>
    </div>
  );
}
