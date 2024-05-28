import Listlivres from '@/components/livreComponents/listlivre';



import {fetchLivres} from "@/services/livreService"
const getLivres=async()=>{
const data=await fetchLivres()
return data;
}

const LivrePage = async () => {
    const livres=await getLivres()
    console.log(livres)

  return (
    <div>
        <Listlivres livres={livres}/>
    </div>
  )
}

export default LivrePage
