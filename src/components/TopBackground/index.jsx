import UserImage from '../../assets/users.png'
import { Backgruond } from './styles'

function TopBackground(){

    return(
        <Backgruond>
        <img src={UserImage} alt="imagem-usuarios"/>
      </Backgruond>
    )
}

export  default TopBackground