import { useState, useEffect } from 'react';

const SwordMembers = (props) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const arr = props.members;
        const membersData = await Promise.all(
          arr.map(async (url) => {
            const res = await fetch(url);
            return res.json();
          })
        );
        setMembers(membersData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMembers();
  }, [props.members]);

  return (
    <div>
       
        {members.map((member) => (
                <>{member.name} ,</>
      ))}
      
    </div>
  );
};

export default SwordMembers;
