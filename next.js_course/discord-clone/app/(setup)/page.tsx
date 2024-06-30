import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

const SetupPage = async () => {
  const profile = await initialProfile();

  if (profile instanceof NextResponse) {
    // 处理未登录的情况，例如重定向到登录页面或显示错误信息
    return <div>Please log in to create a server.</div>;
  }

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return <div>Create a Server</div>;
};

export default SetupPage;
