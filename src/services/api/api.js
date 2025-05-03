import axios from "axios"


const Host = import.meta.env.VITE_HOST


//  GET API
export const getApi = async () => {
        try{
            const response = await axios.get(`${Host}.json`)

            return response.data || []
        }
        catch{
            console.log('API ERROR')
            return {}
        }
}

// Post API
export const postApi = async (e) => {
    try {
        const response = await axios.post(`${Host}.json`, e)
        console.log('POST DATA OKE', response.data)
        return response.data
    }
    catch (error){
        console.log('POST ERROR', error)
        return null
    }
}

// Put API
export const putApi = async (idd, updatedData) => {
    try {
      const response = await axios.put(`${Host}/${idd}.json`, updatedData)
        console.log('PUT DATA OKE', response.data)
        return response.data
    }
    catch (error) {
        console.log('PUT ERROR', error)
    }
}

// Delete API
export const deleteApi = async (key) => {
    try {
      const response = await axios.delete(`${Host}/${key}.json`)
        console.log('DELETE DATA OKE', response)
        return response
    }
    catch (error) {
        console.log('DELETE ERROR', error)
    }
}
