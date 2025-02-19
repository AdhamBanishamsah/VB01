<?php
requireAuth();
require_once 'includes/header.php';

// Fetch user's projects
$stmt = $pdo->prepare("
    SELECT p.*, COUNT(t.id) as total_logs, SUM(t.hours) as total_hours
    FROM projects p
    LEFT JOIN time_logs t ON p.id = t.project_id
    WHERE p.status = 'active'
    GROUP BY p.id
    ORDER BY p.created_at DESC
    LIMIT 5
");
$stmt->execute();
$projects = $stmt->fetchAll();
?>

<div class="row">
    <div class="col-md-12 mb-4">
        <h2>Dashboard</h2>
    </div>
</div>

<div class="row">
    <div class="col-md-6 mb-4">
        <div class="card">
            <div class="card-header">
                Recent Projects
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table data-table">
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Total Hours</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($projects as $project): ?>
                            <tr>
                                <td><?php echo htmlspecialchars($project['title']); ?></td>
                                <td><?php echo number_format($project['total_hours'] ?? 0, 1); ?></td>
                                <td>
                                    <a href="/projects/<?php echo $project['id']; ?>" class="btn btn-sm btn-primary">View</a>
                                </td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    
    <div class="col-md-6 mb-4">
        <div class="card">
            <div class="card-header">
                Time Logged This Week
            </div>
            <div class="card-body">
                <canvas id="weeklyChart"></canvas>
            </div>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Sample data for the chart
    const chartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'Hours Logged',
            data: [4, 6, 8, 5, 7],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    const ctx = document.getElementById('weeklyChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
</script>

<?php require_once 'includes/footer.php'; ?> 