"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteButton = ({ id }: { id: string }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;

  if (status === "unauthenticated" || session?.user.isAdmin) return;

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      router.push("/");
      toast("Product has been delete");
    } else {
      const data = await res.json();

      toast.error(data.message);
    }
  };
  return (
    <>
      <a
        className="inline-block rounded bg-red-600 px-8 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-red-500 relative ml-3"
        href="/download"
        onClick={handleDelete}
      >
        Delete Product
      </a>
    </>
  );
};

export default DeleteButton;
