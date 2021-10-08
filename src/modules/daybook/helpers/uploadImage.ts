import cloudinaryApi from '@/api/cloudinaryApi'
import axios from 'axios'
import { AxiosResponse } from 'axios'
import { CloudinaryResponse } from '../interfaces/cloudinary-reponse.interface';


const uploadImage = async (image: File) => {
    if (!image) return

    try {
        const formData = new FormData()
        formData.append('upload_preset', 'upload-preset-journalapp')
        formData.append('file', image)

        const { data } = await cloudinaryApi.post<any, AxiosResponse<CloudinaryResponse>>('/geodi/image/upload', formData)
        return data.secure_url

    } catch (error) {
        console.error('Error on upload image')
        return null
    }
}


export default uploadImage