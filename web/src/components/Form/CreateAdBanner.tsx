import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner() {
    return (
        <div className="pt-1 mt-8 bg-nlw-gradient rounded-lg overflow-hidden self-stretch mx-64">
            <div className="bg-[#2A2634] px-8 py-6 rounded-b-lg flex justify-between align-center">
              <div>
              <strong className="text-2xl text-white font-black block">Não encrontou seu duo</strong>
              <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
              </div>
              <Dialog.Trigger className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-700 flex items-center gap-3">
                <MagnifyingGlassPlus size={24} />
                Publicar anúncio
              </Dialog.Trigger>
            </div>
        </div>
    )
}