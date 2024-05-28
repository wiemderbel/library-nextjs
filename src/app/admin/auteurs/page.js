import ListeAuteur from "@/components/auteurComponents/listeauteur"
import { fetchAuteurs } from "@/services/auteurService"

//side server render 
const getAuteur = async () =>{
    const data = await fetchAuteurs()
    return data
}

const auteurPage = async () => {
    const  auteurs = await getAuteur()
        //console.log(auteurs)
    
  return (
    <div>
        <ListeAuteur auteurs={auteurs}/>
    </div>
  )
}

export default auteurPage
