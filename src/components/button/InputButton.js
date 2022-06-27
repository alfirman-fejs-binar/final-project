import { PlusIcon } from '../icon';

export default function InputButton() {
  return (
    <button className=" h-24 w-24 rounded-[12px] border bg-neutral-01 border-dashed ">
      <PlusIcon className=" m-auto h-6 w-6 text-neutral-05 " />
    </button>
  );
}
