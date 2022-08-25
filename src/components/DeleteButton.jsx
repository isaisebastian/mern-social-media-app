import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client';
import { Button, Confirm, Icon } from 'semantic-ui-react';
import { FETCH_POSTS_QUERY } from '../util/graphql';

function DeleteButton({ postId, callback }) {
    const [confirm, setConfirm] = useState(false);
    const [deletePost] = useMutation(DELETE_POST_MUTATION, {
        update(proxy){
            setConfirm(false);
            const data = proxy.readQuery({
                query: FETCH_POSTS_QUERY
            });
            proxy.writeQuery({
                query: FETCH_POSTS_QUERY,
                data: {
                    getPosts: data.getPosts.filter(p => p.id !== postId)
                }
            })
            if(callback) callback();
        },
        variables: {
            postId
        }
    });

    return (
        <>
        <Button as='div' color='red' floated='right' onClick={() => setConfirm(true)}>
            <Icon name='trash' style={{ margin: 0 }} />
        </Button>
        <Confirm
            open={confirm}
            onCancel={() => setConfirm(false)}
            onConfirm={deletePost}
        />
        </>
    )
}

const DELETE_POST_MUTATION = gql`
    mutation deletePost($postId: ID!) {
        deletePost(postId: $postId)
    }
`

export default DeleteButton;