import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Icons } from "./icons"
import { AlertTriangle } from "lucide-react"

interface IEmptyState
{
      label?: string
}
export default function EmptyState({ label }: IEmptyState)
{
      const [isFetching, setIsFetching] = useState(true)
      const router = useRouter()


      useEffect(() =>
      {
            setIsFetching(true)

            setTimeout(() =>
            {
                  setIsFetching(false)
            }, 3000);
      }, [router.refresh])



      return isFetching ? <div className="w-full grid place-content-center">
            <Icons.spinner />
      </div> : <div>
            <div className="flex flex-col justify-center items-center p-10">
                  <div>
                        <AlertTriangle size={36} />
                  </div>

                  <div className="max-w-sm text-center mt-2 ">
                        <span className="text-sm">{label || "No result found or check your connectivity."}</span>
                  </div>
            </div>
      </div>
}