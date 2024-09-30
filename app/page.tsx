import { SignOutButton } from '@clerk/nextjs'
 

export default function Home() {


  return (
   <div>
     Let's build a content generator

     <SignOutButton>Log out</SignOutButton>
   </div>
  );
}
