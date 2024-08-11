"use client";
import { redirect } from "next/navigation";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

const DynamicProductEditPage = ({ params }) => {
  const { user } = useSelector((state) => state?.user);
  console.log(params, "admin");

  // if (user?.username == null) {
  //   return redirect("/login");
  // }

  // console.log(process.env.NEXT_PUBLIC_serverUrl);
  const { data: product = [], refetch } = useQuery({
    queryKey: ["productData"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_serverUrl}/product/${params.id}`,
        { cache: "no-store" }
      );
      const data = await res.json();
      return data.payload;
    },
  });
  // console.log(product, "22");
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const url_title = form.url_title.value;
    const image = form.image.value;
    const price = form.price.value;
    const weight = form.weight.value;
    const description = form.description.value;
    const new_product = { title, url_title, image, price, weight, description };
    // console.log("click", new_product);
    fetch(`${process.env.NEXT_PUBLIC_serverUrl}/product/${product?._id}`, {
      // fetch(`${process.env.REACT_APP_serverUrl}/product/${product?.slug}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(new_product),
    })
      .then((response) => response.json())
      .then(({ payload, message, success }) => {
        // console.log("Success:", payload);
        toast.success(payload.title + " " + message);
        refetch();
        // const newStudent = [...studentsData, data];
        // setStudentsData(newStudent)
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.success(error);
        // toast.success(payload.title + " " + message);
      });
    form.reset();
  };

  return (
    <div>
      <h2 className="text-xl font-medium">Edit product</h2>
      {/* <p className="text-blue-500"> {product?.title}</p> */}
      {/* <form onSubmit={handleUpdateProduct} className="my-2"> */}
      <form onSubmit={handleUpdateProduct} className="my-2">
        <div className="form-control w-full mt-3">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            required
            className="bg-slate-100 w-full px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
            type="text"
            placeholder="Title"
            defaultValue={product?.title}
            name="title"
          />
        </div>
        <div className="form-control w-full mt-3">
          <label className="label">
            <span className="label-text">Url Title</span>
          </label>
          <input
            required
            className="bg-slate-100 w-full px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
            type="text"
            placeholder="Url Title"
            defaultValue={product?.slug}
            name="url_title"
          />
        </div>
        <div className="form-control w-full mt-3">
          <label className="label">
            <span className="label-text">Image Link</span>
          </label>
          <input
            required
            className="bg-slate-100 w-full px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
            type="text"
            placeholder="Image Link"
            defaultValue={product?.image}
            name="image"
          />
        </div>
        <div className="form-control w-full mt-3">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            required
            className="bg-slate-100 w-full px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
            type="number"
            placeholder="Price"
            defaultValue={product?.price}
            name="price"
          />
        </div>
        <div className="form-control w-full mt-3">
          <label className="label">
            <span className="label-text">Weight</span>
          </label>
          <input
            required
            className="bg-slate-100 w-full px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
            type="text"
            placeholder="Weight"
            defaultValue={product?.weight}
            name="weight"
          />
        </div>
        <div className="form-control w-full mt-3 mb-4">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            required
            className="bg-slate-100 w-full px-2 py-2 rounded border-[1px] border-blue-500 focus:outline-1 focus:outline-green-500"
            id="w3review"
            name="description"
            placeholder="Description"
            defaultValue={product?.description}
            rows="6"
            cols="50"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Update"
          className="bg-blue-500 text-black px-5 py-2 rounded hover:bg-slate-500 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default DynamicProductEditPage;
