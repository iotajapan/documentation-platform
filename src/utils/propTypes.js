import PropTypes from 'prop-types';

export const ContentHomePagePropTypes = PropTypes.shape({
    headerTopLinks: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    popularTopics: PropTypes.arrayOf(
        PropTypes.shape({
            query: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    content: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string.isRequired,
            folder: PropTypes.string.isRequired,
            subheader: PropTypes.string.isRequired,
            topics: PropTypes.arrayOf(
                PropTypes.shape({
                    href: PropTypes.string.isRequired,
                    header: PropTypes.string.isRequired,
                    subheader: PropTypes.string.isRequired
                })
            )
        })
    ).isRequired,
});

export const ContentMenuPropTypes = PropTypes.objectOf(
    PropTypes.shape({
        versions: PropTypes.objectOf(PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired,
                toc: PropTypes.arrayOf(
                    PropTypes.shape({
                        level: PropTypes.number.isRequired,
                        content: PropTypes.string.isRequired
                    })
                )
            })
        )).isRequired
    }));

export const ContentMenuItemsPropTypes = PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    })
);