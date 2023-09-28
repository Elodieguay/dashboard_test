import { ProfileItem } from "../data/ProfileData";
import {IoMdMail} from 'react-icons/io'
import {FaPhoneAlt} from'react-icons/fa'

interface UserInfoProps {
    userProfile: ProfileItem | undefined }

const UserInfo: React.FC<UserInfoProps> = ({userProfile}) => {
  return (
    <div className="m-10 pl-6  space-y-5  ">
        <h1 className=" text-xl font-bold ">
            Informations personnelles
        </h1>
        <ul className=" space-y-3">
            <li>
                <p className=" font-bold">Prénom</p>
                <p>{userProfile?.firstName} </p>
            </li>
            <li>
                <p className=" font-bold">Nom</p>
                <p>{userProfile?.name} </p>
            </li>
            <li>
                <p className=" font-bold">Code Postal</p>
                <p>{userProfile?.CityCode} </p>
            </li>
            <li>
                <p className=" font-bold">Adresse</p>
                <p>{userProfile?.Adress} </p>
            </li>
            <li className="">
                <p className=" flex font-bold  space-x-4"><IoMdMail size={20} color='369C96' /> <span>Email</span></p>
                <p className=" pl-9">{userProfile?.mail} </p>
            </li>
            <li>
                <p className=" flex font-bold space-x-4"><FaPhoneAlt size={20} color='369C96'/> <span>Téléphone</span></p>
                <p className=" pl-9">{userProfile?.phone} </p>
            </li>
        </ul>

    </div>
  )
}

export default UserInfo