const config = {
    userId: '512923',
    orgId: '001',
}

export function Console(text) {
    console.log(text || '---', config.userId);
}