import { useRouter } from 'next/router';

const FolderDetails = () => {
    const router = useRouter();
    const {name,id} =  router.query;
  return (
    <div>FolderDetails: {name} </div>
  )
}

export default FolderDetails