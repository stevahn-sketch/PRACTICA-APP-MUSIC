import styled from "styled-components";

const SongDetailsMain = styled.main`
    max-width: 900px;
    margin: 40px auto;
    padding: 30px;
    background: ${(props) => props.theme.colors.background};
    color: #ffffff;
    border: solid;
    border-radius: 12px;
    border-color: #0278af;
`;

const SongDetailsHeader = styled.header`
    text-align: center;
    margin-bottom: 30px;
`;

const SongDetailsHeaderTitle = styled.h2`
    color: #fff;
    font-size: 28px;
    margin-bottom: 10px;
`;

const SongDetailsHeaderSubTitle = styled.h3`
    color: #fff;
    font-size: 24px;
    margin: 0;
`;

const SongDetailsInfo = styled.p`
    margin-left: 0px;
`;

const SongDetailsSection = styled.section`
    padding: 20px;
    background-color: #151414;
    border-radius: 8px;
    margin-bottom: 30px;
`;

const SongDetailsSectionInfo = styled.p`
    line-height: 1.6;
    margin: 10px 0;
`;

const SongDetailsTracksSection = styled.section`
    width: 42%;
`;

const SongDetailsTracksTitle = styled.h3`
    margin-left: 20px;
    color: #fff;
    margin-bottom: 15px;
`;

const SongDetailsTracksList = styled.ol`
    padding-left: 25px;
`;

const SongDetailsTrackItem = styled.li`
    padding: 12px;
    margin-bottom: 8px;
    background-color: #151414;
    border-radius: 6px;
`;

const SongDetailsTrackInfo = styled.span`
    color: #bdbdbd;
    font-size: 14px;
`;

export {
    SongDetailsMain,
    SongDetailsHeader,
    SongDetailsHeaderTitle,
    SongDetailsHeaderSubTitle,
    SongDetailsInfo,
    SongDetailsSection,
    SongDetailsSectionInfo,
    SongDetailsTracksSection,
    SongDetailsTracksTitle,
    SongDetailsTracksList,
    SongDetailsTrackItem,
    SongDetailsTrackInfo,
}