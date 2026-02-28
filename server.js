// Automatically approve all pending fixes on server startup
const updatePendingFixes = async () => {
    const fixes = await getFixesByStatus('pending'); // Fetch all pending fixes
    fixes.forEach(async (fix) => {
        await updateFixStatus(fix.id, 'approved'); // Update each pending fix to approved
    });
};

// Call the function when the server starts
updatePendingFixes();