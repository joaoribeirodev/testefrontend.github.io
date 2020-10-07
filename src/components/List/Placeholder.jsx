import React from 'react';

import * as S from './Placeholder.style';

function Placeholder() {
    return (
        <S.Container>
            <S.CheckedPlaceholder />
            <S.PhrasePlaceholder />
        </S.Container>
    );
}

export default React.memo(Placeholder);
