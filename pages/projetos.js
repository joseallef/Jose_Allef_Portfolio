import React, { useState } from 'react';
import PropTypes, { shape } from 'prop-types';
import Lottie from 'lottie-react-web';
import SEO from '../src/components/commons/SEO';
import Header from '../src/components/commons/Header';
import Card from '../src/components/commons/Card';
import closeJson from '../public/icon/close.json';

import { getContent } from '../src/components/screens/ContentProjects';
import SectionTitle from '../src/components/commons/SectionTitle';
import About from '../src/components/pages/about';
import { WrapperMain } from '../src/components/commons/Main/StyleMain';
import { Grid } from '../src/components/foundation/layout/Grid';
import TextField from '../src/components/forms/TextField';
import {
  BoxInputSearch, Close, WrapperSearch, WrapperDialog,
} from '../src/components/pages/StyleInputSearchProjects';
import Modal from '../src/components/commons/Modal';

export const getStaticProps = async () => {
  const allProjects = await getContent();
  const clientUser = await fetch('https://api.github.com/users/joseallef')
    .then((res) => res.json());

  const repository = await fetch('https://api.github.com/users/joseallef/repos')
    .then((res) => res.json());

  const repositories = repository.filter((myRepositorys) => !myRepositorys.fork)
    .map((myRepository) => ({
      name: myRepository.name,
      login: myRepository.owner.login,
      avatar: myRepository.owner.avatar_url,
      url: myRepository.html_url,
      forks: myRepository.forks,
      watchers: myRepository.watchers,
      description: myRepository.description,

    }));

  return {
    props: {
      allProjects,
      repositories,
      clientUser,
    },
    revalidate: 30,
  };
};

export default function Projects({ allProjects, repositories, clientUser }) {
  const [repository, setRepository] = useState(repositories);
  const [repoUser, setRepoUser] = useState(clientUser);
  const [isModalOpen, setModalState] = React.useState(false);
  const [message, setMessage] = React.useState({});
  const [nameRepository, setNameRepository] = useState({
    nameRepo: '',
  });

  async function searchRepository(user) {
    if (user && user.length > 0) {
      const userClient = await fetch(`https://api.github.com/users/${user}`)
        .then((res) => res.json());
      const repositoryUser = await fetch(`https://api.github.com/users/${user}/repos`)
        .then((res) => res.json());
      if (repositoryUser.message !== 'Not Found') {
        const repositoriesUser = repositoryUser.filter((myRepositorys) => !myRepositorys.fork)
          .map((myRepository) => ({
            name: myRepository.name,
            avatar: myRepository.owner.avatar_url,
            url: myRepository.html_url,
            forks: myRepository.forks,
            watchers: myRepository.watchers,
            description: myRepository.description,
          }));
        if (!repositoriesUser.length) {
          setMessage({ msg: 'Não há repositório nesse perfil.:(' });
          setModalState(true);
        } else {
          setRepoUser(userClient);
          setRepository(repositoriesUser);
          setNameRepository({ nameRepo: '' });
        }
      } else {
        setMessage({ msg: 'Usuário não encontrado.:(' });
        setModalState(true);
      }
    } else {
      setMessage({ msg: 'Campo vazio, preencha para continuar a pesquisa!:(' });
      setModalState(true);
    }
  }

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setNameRepository({
      ...nameRepository,
      [fieldName]: event.target.value,
    });
  }

  return (
    <>
      <SEO headTitle="Projetos" />
      <Header />
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(propsDoModal) => (
          <WrapperDialog
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...propsDoModal}
          >
            <Close
              onClick={() => {
                setModalState(false);
              }}
            >
              <Lottie
                width="30px"
                height="30px"
                options={{
                  animationData: closeJson,
                }}
              />
            </Close>
            <span>{message.msg}</span>
          </WrapperDialog>
        )}
      </Modal>
      <Grid.Container
        display="flex"
        flex="1"
        justifyContent="center"
        alignItems="center"
      >
        <WrapperMain>
          <SectionTitle />
          <Card
            projects={allProjects.allPageProjects}
          />
          <BoxInputSearch>
            <WrapperSearch>
              <TextField
                tag="text"
                name="nameRepo"
                value={nameRepository.nameRepo}
                placeholder="Usuário do repositório"
                onChange={handleChange}
              />
              <button type="submit" onClick={() => searchRepository(nameRepository.nameRepo)}>Pesquisar</button>
            </WrapperSearch>
          </BoxInputSearch>
          <About repositories={repository} clientUser={repoUser} />
        </WrapperMain>
      </Grid.Container>
    </>
  );
}

Projects.defaultProps = {
  allProjects: PropTypes.shape({
    allPageProjects: PropTypes.arrayOf(PropTypes.shape({
      description: '',
      link: '',
      title: '',
      img: PropTypes.arrayOf(shape({
        id: '',
        url: '',
      })),
    })),
  }),
  repositories: PropTypes.arrayOf(shape({
    name: '',
    url: '',
  })),
  clientUser: PropTypes.shape({
    avatar_url: '',
    login: '',
    name: '',
    followers: 0,
    following: 0,
  }),
};

Projects.propTypes = {
  allProjects: PropTypes.shape({
    allPageProjects: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string,
      link: PropTypes.string,
      title: PropTypes.string,
      img: PropTypes.arrayOf(shape({
        id: PropTypes.string,
        url: PropTypes.string,
      })),
    })),
  }),
  repositories: PropTypes.arrayOf(shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })),
  clientUser: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
  }),
};
