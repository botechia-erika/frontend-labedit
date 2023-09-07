import styled from 'styled-components';

export const AdminCtn = styled.div`
 display: flex;
    flex-direction: column;
   min-height: 100vh;

header{
    padding-top: 110px;
    text-align: center;
    margin-bottom: 40px;
}

main {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
}

aside {
    width: 25%;
}

section {
    flex-grow: 1;
}

nav { 
    width: 20%;
}
`