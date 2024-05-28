import React from 'react'
import { fetchEditeurs } from '@/services/editeurService'
import ListEditeur from '@/components/editeurComponents/listediteur'

const getEditeur = async () =>{
    const data = await fetchEditeurs()
    return data
}


const EditeurPage = async () => {
    const editeurs = await getEditeur()
    console.log(editeurs)
  return (
    <div>
      <ListEditeur editeurs={editeurs} />
    </div>
  )
}

export default EditeurPage
