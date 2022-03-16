import React from 'react';
import { FooterMediaStyled } from '../footer.styles';
import Icons from '../../../assets/icons';
import { Icon } from '../../elements/icon';

export const FooterMedia = () => {
    const mediaSource = [
        {
            link: '#', src: Icons.youtube, title: 'youtube'
        },
        {
            link: '#', src: Icons.vk, title: 'vk'
        },
        {
            link: '#', src: Icons.facebook, title: 'facebook'
        },
        {
            link: '#', src: Icons.telegram, title: 'telegram'
        },
        {
            link: '#', src: Icons.eMedia, title: 'eMedia'
        },
    ];
    const mediaItem = mediaSource.map((item) => <Icon key={item.title} mode="iconLink" link={item.link} src={item.src} alt={item.title} />);
    return (
        <FooterMediaStyled>
            {mediaItem}
        </FooterMediaStyled>
    );
};
