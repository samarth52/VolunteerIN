import React, {useState} from 'react'
import styles from "../styles/ProfileCard.module.css";
import Modal from 'react-modal';
import VolunteerDetailModal from './VolunteerDetailModal'
import OrganizationDetailModal from './OrganizationDetailModal'

const ProfileCard = ({ img, name, job, exp, viewOnly, profile, role }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [connected, setConnected] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      display: "flex",
      left: "16.5%",
      width: "67%",
    },
  };

  return (
    <div>
      <div class={connected ? styles.connected : styles.flexboxCandidate} onClick={openModal}>
    <img src={img} class={styles.imageStyle} width="100" height="100"/>
    <h2 class={styles.profileText}>{name}</h2>
    <h3 class={styles.profileText2}>{job}</h3>
    <h3 class={styles.profileText3}>{exp}</h3>
    </div>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
      
      {role === "volunteer"
      ? <VolunteerDetailModal volunteer={profile} isConnected={connected} modalCallback={(value) => setIsOpen(value)}
          connectCallback={() => { setConnected(true) }} viewOnly={viewOnly}/>
      : <OrganizationDetailModal organization={profile} isConnected={connected} modalCallback={(value) => setIsOpen(value)}
      connectCallback={() => { setConnected(true) }} viewOnly={viewOnly}/>}
    </Modal>
</div>
  )
}

export default ProfileCard

// "https://i.ibb.co/Y3QvCYc/ngoLogo2.jpg"

// <VolunteerDetailModal
//           firstName="Samrat"
//           lastName="Sahoo"
//           interests={["Software Engineering", "Product", "Fundraising"]}
//           yearsOfExperience="10"
//           description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
//           profileImage="https://media.graphassets.com/CqNntlMDRgKm9mYPIRNC"
//           experiences={[
//             {organization: "Healing4Heroes",
//           title: "Engineering Manager",
//         "years": 15},
//         {organization: "Healing4Heroes",
//           title: "Engineering Manager",
//         "years": 15},{organization: "Healing4Heroes",
//         title: "Engineering Manager",
//       "years": 15}
//           ]}
//         ></VolunteerDetailModal>