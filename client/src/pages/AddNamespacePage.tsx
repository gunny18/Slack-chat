import AddNamespaceForm from "../app/namespace/AddNamespaceForm";

const AddNamespacePage = () => {
  return (
    <div className="m-auto pt-10 w-1/4">
      <h1 className="mb-10 text-4xl font-bold">Create a Namespace!</h1>
      <AddNamespaceForm />
    </div>
  );
};

export default AddNamespacePage;
