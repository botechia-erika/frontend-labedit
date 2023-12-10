export const goToHome = (navigate)=>{
    navigate('/')
}

export const goToSignIn=(navigate)=>{
    navigate('/sign-in')
}

export const goToSignUp = (navigate)=>{
    navigate('/sign-up')
}
export const goToLabeEcommerce = (navigate)=>{
    navigate('/courses')
}

export const goToLabeEdit=(navigate)=>{
    navigate('/sign-in')
}

export const goToLabeBooks = (navigate)=>{
    navigate('/projects')
}

export const goToCourseDetails = (navigate, idCourse)=>{
    navigate(`/courses/${idCourse}`)
}

export const goToPostDetails = (navigate, idPost)=>{
    navigate(`/posts/${idPost}`)
}