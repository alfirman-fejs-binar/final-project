import { PrimaryButton } from '../buttons';
import { XIcon, WhatsappIcon } from '../icons';

export default function SuccessCheckoutModal() {
  return (
    <div className="relative flex  w-[360px] flex-col rounded-2xl bg-neutral-01  px-8 pt-4 pb-6">
      <button className="place-self-star mb-4 place-self-end " type="button">
        <XIcon className="h-6 w-6 text-neutral-05 " />
      </button>
      <p className="mb-2  text-body-14 font-medium">
        Yeay kamu berhasil mendapat harga yang sesuai
      </p>
      <p className="mb-4  text-body-14 text-neutral-03">
        Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
      </p>
      <div className="mb-6 flex grow flex-col gap-4 rounded-2xl bg-[#EEEEEE] p-4">
        <p className="text-center text-body-14 font-medium">Product Match</p>
        <div className="flex flex-row items-center">
          <img
            alt="img-profile"
            className="mr-4 h-12 w-12 rounded-xl object-cover"
            src="/img/img-profile1.png"
          />
          <div className="flex grow flex-col gap-y-1">
            <p className="text-body-14 font-medium">Nama Pembeli</p>
            <p className="text-body-10 text-neutral-03">Kota</p>
          </div>
        </div>
        <div className="flex flex-row items-start">
          <img
            alt="img-modal-product"
            className="mr-4 h-12 w-12 rounded-xl object-cover"
            src="/img/img-notification.png"
          />
          <div className="flex grow flex-col gap-y-1">
            <p className="text-body-14">Jam Tangan Casio</p>
            <p className="text-body-14 text-neutral-05 line-through ">Rp 250.000</p>
            <p className="text-body-14 text-neutral-05">Ditawar Rp 200.000</p>
          </div>
        </div>
      </div>
      <PrimaryButton>
        <div className="flex flex-row items-center">
          <p className="mr-1 grow  text-center">Hubungi via Whatsapp</p>
          <WhatsappIcon />
        </div>
      </PrimaryButton>
    </div>
  );
}
