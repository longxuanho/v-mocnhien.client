import moment from 'moment';

export default function (value, format) {
    if (!value) return ''
    if (!format) return moment(value).fromNow()
    return moment(value).format(format)
}