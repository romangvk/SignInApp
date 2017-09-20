import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { RNPrint } from 'NativeModules';
var badgeData = {};
export const Badge = {
    init: (id, name) => {
        if (!badgeData[id]) badgeData[id] = { badge: false, name: name };
        console.log(badgeData);
    },
    updateBadgeData: (id, value) => {
        badgeData[id].value = value;
    },
    isOnBadge: (id) => {
        return badgeData[id] && badgeData[id].badge;
    },
    toggleBadgeData: (id) => {
        badgeData[id].badge = !badgeData[id].badge;
    },
    addBadgeData: (id) => {
        badgeData[id].badge = true;
    },
    removeBadgeData: (id, value) => {
        badgeData[id].badge = false;
    },
    getBadge: () => {
        badgeItems = [];
        Object.keys(badgeData).map((key) => {
            if (badgeData[key].badge) badgeItems.push({ name: badgeData[key].name, value: badgeData[key].value });
        });
        console.log(badgeItems)
        return badgeItems;
    }
}
var picturePath = '';
export const Picture = {
    updatePicturePath: (path) => {
        picturePath = path;
        console.log(picturePath);
    },
    getPicturePath: () => {
        return picturePath;
    }
}
export const CreateBadge = () => {
    return new Promise((resolve, reject) => {
        var html = () => {
            let text = '';
            Object.keys(badgeData).map((key) => {
                if (badgeData[key].badge && badgeData[key].value) text += ('<div>' + badgeData[key].value + '</div>');
            });
            let picture =
                '<div style="background-image:url(' + "'" + picturePath + "'" + ');' +
                'background-position:50% 50%;' +
                'background-size:cover;' +
                'width:130px;' +
                'height:130px"></div>';
            let date = ('<div>' + (new Date()).toDateString() + '</div>');
            return (
                '<div style="height:507;' +
                'display:flex;' +
                'flex:auto;' +
                'flex-direction:column;' +
                'align-items:center;' +
                'justify-content:center;' +
                'background-color:lightgray;">' + text + picture + date + '</div>'
            );
        }
        //convert to pdf
        var options = {
            html: html(),
            height: 419,    //~5.8 * 72,
            width: 298,     //~4.1 * 72,
            fileName: 'idBadge.pdf',
            directory: 'temp',
            padding: 0
        }
        RNHTMLtoPDF.convert(options).then((file) => {
            resolve(file);
        }).catch((err) => {
            reject(err);
        });
    });
}
export const PrintBadge = (file) => {
    return new Promise((resolve, reject) => {
        RNPrint.print(file.filePath).then((jobName) => {
            resolve(jobName);
        }).catch((err) => {
            reject(err);
        });
    });
}
